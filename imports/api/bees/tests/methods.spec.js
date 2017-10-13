//import { Factory } from 'meteor/dburles:factory';
//import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { ValidatedMethod } from "meteor/mdg:validated-method";
//import { _ } from 'meteor/underscore';
//import { Bees } from '../collection';
import { fetchAllForUser } from "../methods";

describe("methods", function() {
  describe("bees.fetchAllForUser", () => {
    it("runs normally", () => {
      const result = fetchAllForUser.run();
      expect(Mongo.Collection.prototype.find).toHaveBeenCalled();
    });
  });
});
