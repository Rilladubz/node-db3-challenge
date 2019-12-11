const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add
};

function find() {
  return db("schemes");
}

function findById(id) {
  //     select id, scheme_name from schemes
  // where schemes.id = 1
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  // select st.id,
  //     sc.scheme_name,
  //     st.step_number,
  //     st.instructions from schemes as sc
  //     join steps as st on st.scheme_id
  //     = sc.id

  return db("schemes as sc")
    .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
    .join("steps as st", "st.scheme_id", "sc.id")
    .where("st.scheme_id", id);
}

function add(body) {
  return db("schemes")
    .insert(body)
    .then(ids => {
      const [id] = ids;

      return findById(id);
    });
}
