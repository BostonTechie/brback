import { User } from '../models/user.js'
import { Profile } from '../models/Profile.js'
import { Module } from '../models/Module.js'

function index(req, res) {

}

function show(req, res) {

}

function create(req, res) {
  Module.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

function update(req, res) {

}

function deleteModule(req, res) {

}

export {
  index,
  show,
  create,
  update,
  deleteModule as delete,
}