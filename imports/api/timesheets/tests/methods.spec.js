//import { Factory } from 'meteor/dburles:factory';
//import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { ValidatedMethod } from "meteor/mdg:validated-method";
//import { _ } from 'meteor/underscore';
//import { Bees } from '../collection';
import {
  fetchAllForUser,
  insert,
  updateName,
  remove,
  removeAllForUser
} from "../methods";

describe("bee methods", function() {
  let collection;
  beforeEach(() => {
    collection = Mongo.Collection.prototype;
  });

  describe("bees.fetchAllForUser", () => {
    it("runs normally", () => {
      const result = fetchAllForUser.run();
      expect(collection.find).toHaveBeenCalled();
    });
  });

  describe("bees.insert", () => {
    let bee;
    beforeEach(() => {
      bee = {
        name: "Bee1",
        type: "Worker"
      };
    });

    it("runs normally", () => {
      const result = insert.run(bee);
      expect(collection.insert).toHaveBeenCalled();
    });

    it("runs the error case", () => {
      const error = Meteor.Error("Insert Error");
      collection.insert = jest.fn(bee => {
        throw error;
      });
      expect(() => {
        insert.run(bee);
      }).toThrow(
        Meteor.Error(
          "api.bees.insert.unspecifiedError",
          "Could not insert a new bee.",
          error
        )
      );
    });
  });

  describe("bees.updateName", () => {
    let beeId, newName;
    beforeEach(() => {
      beeId = "asdf1234";
      newName = "newName";
    });

    it("runs normally", () => {
      const result = updateName.run({ beeId, newName });
      expect(collection.findOne).toHaveBeenCalledWith(beeId);

      const updateQuery = { $set: { name: newName } };
      expect(collection.update).toHaveBeenCalledWith(beeId, updateQuery);
    });

    //TODO throws error
  });

  describe("bees.remove", () => {
    let beeId;
    beforeEach(() => {
      beeId = "asdf1234";
    });

    it("runs normally", () => {
      const result = remove.run({ beeId });
      expect(collection.findOne).toHaveBeenCalledWith(beeId);
      expect(collection.remove).toHaveBeenCalledWith(beeId);
    });

    //TODO throws error
  });

  describe("bees.removeAllForUser", () => {
    it("runs normally", () => {
      const result = removeAllForUser.run();
      expect(collection.remove).toHaveBeenCalledWith({});
    });

    //TODO throws error
  });
});
