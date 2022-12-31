import budget from "../models/budget.js";

export function getAll(req, res) {
  budget
      .find({})
      .then(docs => {
          res.status(200).json(docs);
      })
      .catch(err => {
          res.status(500).json({ error: err });
      });
}


export function getAllBudgetByIdUser(req, res) {
  budget
  .find({"user_id": req.params.user_id })

  .then(budget=> {
      res.status(200).json(budget);
  })
  .catch(err => {
      res.status(500).json({ error: err });
  });
}


export function updateBudget(req, res) {
  budget.updateOne({ _id: req.params._id }, { $set: req.body })
    .then((doc) => {
      res.status(200).json("Budget updated");
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function  addBudget(req, res) {
  budget
  .create({
    nom: req.body.nom,
    categorie: req.body.categorie,
    montant: req.body.montant,
    note: req.body.note, 
    user_id: req.body.user_id
  })
    .then((newBudget) => {
      res.status(201).json(newBudget);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export function updataBudget(req, res) {
  budget
      .findOneAndUpdate({ "_id":req.params.idbudget },
          { "nom": req.body.nom,
            "categorie": req.body.categorie,
            "montant": req.body.montant,
            "note": req.body.note})
      .then(doc => {
          res.status(200).json(doc);
      })
      .catch(err => {
          res.status(500).json({ error: err });
      });
}

export function getBudgetById(req, res) {
  budget.findOne({ _id: req.params.id })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

/**
 * Supprimer un seul document
 */
export function deleteOnce(req, res) {
    budget
        .findOneAndRemove({ "_id": req.params.idbudget })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
  }