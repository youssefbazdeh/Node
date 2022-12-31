import wedding from "../models/wedding.js";


export function getAllWedding(req, res) {
  wedding.find({})
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getWeddingById(req, res) {
  wedding.findOne({ _id: req.params._id })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getWeddingByUserId(req, res) {
  wedding.findOne({ user_id: req.params.user_id })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function updateWedding(req, res) {
  wedding.updateOne({ _id: req.params._id }, { $set: req.body })
    .then((doc) => {
      res.status(200).json("Wedding updated");
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getWeddingByIdUser(req, res) {
  wedding
  .find({"user_id": req.params.user_id })

  .then(wedding=> {
      res.status(200).json(wedding);
  })
  .catch(err => {
      res.status(500).json({ error: err });
  });
}

export function addWedding(req, res) {
  wedding.create({
    fullname: req.body.fullname,
    partner_fullname: req.body.partner_fullname,
    genre: req.body.genre,
    partner_sexe: req.body.partner_sexe,
    partner_email: req.body.partner_email,
    wedding_name: req.body.wedding_name,
    date_ceremonie: req.body.date_ceremonie,
    heure_ceremonie: req.body.heure_ceremonie,
    budget: req.body.budget,
    user_id: req.body.user_id,
    

    image: `${req.protocol}://${req.get("127.0.0.1:9092")}/img/car/${
      req.file.filename
    }`,
  })
    .then((newWedding) => {
      res.status(201).json(newWedding);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}