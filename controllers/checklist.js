import checklist from "../models/checklist.js";

export function getAll(req, res) {
  checklist
      .find({})
      .then(docs => {
          res.status(200).json(docs);
      })
      .catch(err => {
          res.status(500).json({ error: err });
      });
}


export function getAllChecklistByIdUser(req, res) {
  checklist
  .find({"user_id": req.params.user_id })

  .then(checklist=> {
      res.status(200).json(checklist);
  })
  .catch(err => {
      res.status(500).json({ error: err });
  });
}


export function updateChecklist(req, res) {
  checklist.updateOne({ _id: req.params._id }, { $set: req.body })
    .then((doc) => {
      res.status(200).json("Checklist updated");
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function addChecklist(req, res) {
  checklist.create({
    nom: req.body.nom,
    type: req.body.type,
    note: req.body.note,
    date: req.body.date, 
    status: req.body.status,
    user_id: req.body.user_id,
          
    image: `${req.protocol}://${req.get("127.0.0.1:9092")}/img/car/${
      req.file.filename
    }`,
  })
    .then((newChecklist) => {
      res.status(201).json(newChecklist);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export function updataChecklist(req, res) {
  checklist
      .findOneAndUpdate({ _id:req.params._id },
          { "nom": req.params.nom,
            "type": req.body.type,
            "note": req.body.note,
            "status": req.body.status ,
            "image" : req.body.image,
            "date" : req.body.date})
      .then(doc => {
          res.status(200).json(doc);
      })
      .catch(err => {
          res.status(500).json({ error: err });
      });
}

export function getchecklistById(req, res) {
  checklist.findOne({ _id: req.params.id })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}