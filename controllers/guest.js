import guest from "../models/guest.js";

export function getAll(req, res) {
  guest
      .find({})
      .then(docs => {
          res.status(200).json(docs);
      })
      .catch(err => {
          res.status(500).json({ error: err });
      });
}


export function getAllGuestByIdUser(req, res) {
  guest
  .find({"user_id": req.params.user_id })

  .then(guest=> {
      res.status(200).json(guest);
  })
  .catch(err => {
      res.status(500).json({ error: err });
  });
}


export function updateGuest(req, res) {
  guest.updateOne({ _id: req.params._id }, { $set: req.body })
    .then((doc) => {
      res.status(200).json("Guest updated");
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function addguest(req, res) {
  guest.create({
    name: req.body.name,
    lastname: req.body.lastname,
    sexe: req.body.sexe,
    groupe: req.body.groupe, 
    phone: req.body.phone,
    email: req.body.email,
    adresse: req.body.adresse,
    note: req.body.note,
    user_id: req.body.user_id

  })
    .then((newGuest) => {
      res.status(201).json(newGuest);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export function updataGuest(req, res) {
  guest
      .findOneAndUpdate({ "_id":req.params.idguest },
          { "name": req.body.name,
            "lastname": req.body.lastname,
            "sexe": req.body.sexe,
            "groupe": req.body.groupe, 
            "phone": req.body.phone,
            "email": req.body.email,
            "adresse": req.body.adresse,
            "note": req.body.note})
      .then(doc => {
          res.status(200).json(doc);
      })
      .catch(err => {
          res.status(500).json({ error: err });
      });
}

export function getGuestById(req, res) {
  guest.findOne({ _id: req.params.id })
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
    guest
        .findOneAndRemove({ "_id": req.params.idguest })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
  }