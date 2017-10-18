import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { ValidatedMethod } from "meteor/mdg:validated-method";

import { Timesheets } from "../collection";

import { fetchAll, insert } from "../methods";

describe("timesheets methods", () => {
  let collection;
  beforeEach(() => {
    collection = Mongo.Collection.prototype;
  });

  describe("timesheets.fetchAll", () => {
    it("runs normally", () => {
      const result = fetchAll.run();
      expect(Timesheets.find).toHaveBeenCalledWith({}, { sort: { date: -1 } });
    });
  });

  describe("timesheets.insert", () => {
    let timesheet;
    beforeEach(() => {
      collection.findOne = jest.fn();

      Meteor.wrapAsync = csv => {
        return timesheet => {
          return [
            [],
            ["4/11/2016", 10, 1, "A"],
            ["14/11/2016", 5, 1, "A"],
            ["20/11/2016", 3, 2, "B"],
            [0, 123, 0, 0]
          ];
        };
      };

      timesheet = `date,hours worked,employee id,job group
        4/11/2016,10,1,A
        14/11/2016,5,1,A
        20/11/2016,3,2,B
        report id,45,,`;
    });

    it("runs normally", () => {
      const result = insert.run({ timesheet });
      expect(Timesheets.findOne).toHaveBeenCalledWith({ reportId: 123 });
      expect(collection.insert).toHaveBeenCalledTimes(3);
    });

    it("throws error when csv is 2 lines or less", () => {
      Meteor.wrapAsync = csv => {
        return timesheet => {
          return [[0, 123, 0, 0]];
        };
      };

      expect(() => {
        insert.run(timesheet);
      }).toThrow(Meteor.Error("time does not have enough rows to be parsed"));
    });

    it("throws error when existing report is uploaded", () => {
      collection.findOne = jest.fn(({ reportId }) => ({ reportId }));
      expect(() => {
        insert.run(timesheet);
      }).toThrow(Meteor.Error(`Report #123 has already been uploaded.`));
    });

    it("runs generic insert error case", () => {
      const error = Meteor.Error("Insert Error");
      collection.insert = jest.fn(timesheet => {
        throw error;
      });
      expect(() => {
        insert.run(timesheet);
      }).toThrow(error);
    });
  });
});
