/**
 * Created by dread on 12.09.16.
 */
import { Mongo } from 'meteor/mongo';

export const Objects = new Mongo.Collection('objects', { idGeneration : 'MONGO' });