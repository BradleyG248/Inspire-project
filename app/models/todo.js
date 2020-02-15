export default class Todo {
  constructor(data) {
    this.description = data.description,
      this.complete = data.complete || false;
    this._id = data._id
  }
  get Template() {
    return `
      <button class = "btn btn-primary">Done?</button> <p>${this.description}</p>
    `
  }
}