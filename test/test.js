'use strict'

import { Stack, StackException } from "../index";
import { equal, throws } from 'assert';

let stack = new Stack();
let preInitStack = new Stack(1,"2",3,[4, 5],6);

describe("Stack", function _describeStack(){
    describe("init", function _describeInit(){
        it("should be stack empty", function _it() {
            equal(0, stack.size);
        });
        it("should be size 5 for pre init stack", function _it() {
            equal(5, preInitStack.size);
        });
    });
    describe("push", function _describePush(){
        it("should be stack size equals 2", function _it() {
            stack.push(1).push(2);
            equal(2, stack.size);
        });
        it("should be throw an exception if parameter is empty", function _it() {
            throws(() => stack.push(), StackException );
        });
    });
    describe("pop", function _describePop(){
        it("should be stack size equals 1", function _it() {
            stack.pop();
            equal(1, stack.size);
        });
        it("should be throw an exception", function _it() {
            stack.pop();
            throws(() => stack.pop(), StackException );
        });
    });
    describe("peek", function _describePeek(){
        it("should be stack size equals 1", function _it() {
            stack.push(1).peek();
            equal(1, stack.size);
        });
        it("should be throw an exception", function _it() {
            stack.pop();
            throws(() => stack.peek(), StackException );
        });
    });
});