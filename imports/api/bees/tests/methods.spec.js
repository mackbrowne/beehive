//import { Factory } from 'meteor/dburles:factory';
//import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { ValidatedMethod } from "meteor/mdg:validated-method";
//import { _ } from 'meteor/underscore';
//import { Bees } from '../collection';
import { fetchAllForUser, insert, updateName, remove } from "../methods";

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

    //TODO throws error
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
});
