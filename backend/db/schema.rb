# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_13_035648) do

  create_table "characters", force: :cascade do |t|
    t.integer "current_coordinate_row"
    t.integer "current_coordinate_col"
    t.integer "maze_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hay_patches", force: :cascade do |t|
    t.integer "current_coordinate_row"
    t.integer "current_coordinate_col"
    t.integer "maze_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "maze_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "maze_id"
    t.integer "finished_time"
    t.integer "players_current_row"
    t.integer "players_current_col"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mazes", force: :cascade do |t|
    t.integer "size"
    t.string "difficulty"
    t.integer "maze_finish_row"
    t.integer "maze_finish_col"
    t.integer "initial_row"
    t.integer "initial_col"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
