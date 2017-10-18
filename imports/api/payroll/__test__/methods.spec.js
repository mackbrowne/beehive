import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { ValidatedMethod } from "meteor/mdg:validated-method";

import moment from "moment";

import { Timesheets } from "../../timesheets/collection";

import { fetchAll } from "../methods";

describe("payroll methods", () => {
  let collection;
  beforeEach(() => {
    collection = Mongo.Collection.prototype;
  });

  describe("payroll.fetchAll", () => {
    it("runs normally", () => {
      const makeMoment = dateString =>
        moment(dateString, "DD/MM/YYYY").toDate();
      collection.find = jest.fn(props => {
        return {
          fetch: () => [
            {
              date: makeMoment("4/11/2016"),
              employee: "1",
              hours: 10,
              job: "A"
            },
            {
              date: makeMoment("14/11/2016"),
              employee: "2",
              hours: 4,
              job: "B"
            },
            {
              date: makeMoment("20/11/2016"),
              employee: "1",
              hours: 3,
              job: "B"
            }
          ]
        };
      });

      const result = fetchAll.run();
      expect(Timesheets.find).toHaveBeenCalledWith(
        {},
        { sort: { date: -1, employee: -1 } }
      );

      expect(result).toMatchSnapshot();

      expect(result[0].amount).toBe(200);
      expect(result[0].employee).toBe("1");

      expect(result[1].amount).toBe(120);
      expect(result[1].employee).toBe("2");
    });
  });
});
