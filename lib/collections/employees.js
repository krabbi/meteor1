/**
 * Created by dread on 12.09.16.
 */
import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees', { idGeneration : 'MONGO' });