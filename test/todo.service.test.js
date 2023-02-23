const chai = require("chai");
const sinon = require("sinon");
const toDoRepository = require("../app/repositories/ToDorepository");
const expect = chai.expect;
const faker = require("faker");
const toDoService = require("../app/services/ToDoService");
describe("ToDoService", function() {
  describe("create", function() {
    it("should create a new task", async function() {
      const stubValue = {
        id: faker.random.uuid(),
        label: faker.label.findLabel(),
        completed: faker.completed.boolean(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      };
      const todoRepo = new toDoRepository();
      const stub = sinon.stub(todoRepo, "create").returns(stubValue);
      const todoService = new ToDoService(toDoRepo);
      const todo = await todoService.create(stubValue.label, stubValue.completed);
      expect(stub.calledOnce).to.be.true;
      expect(todo.id).to.equal(stubValue.id);
      expect(todo.label).to.equal(stubValue.lable);
      expect(todo.completed).to.equal(stubValue.completed);
      expect(todo.createdAt).to.equal(stubValue.createdAt);
      expect(todo.updatedAt).to.equal(stubValue.updatedAt);
    });

//test a case of no task
    it("should return an empty object if no task matches the provided id", async function() {
      const stubValue = {};
      const todoRepo = new toDoRepository();
      const stub = sinon.stub(todoRepo, "getTask").returns(stubValue);
      const todoService = new ToDoService(todoRepo);
      const todo = await todoService.getTask(1);
      expect(stub.calledOnce).to.be.true;
      expect(todo).to.deep.equal({})
    });
  });
});