# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_05_30_092615) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "item_id", null: false
    t.index ["item_id"], name: "index_books_on_item_id"
    t.index ["user_id"], name: "index_books_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "likes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "podcasts", force: :cascade do |t|
    t.string "producer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "item_id", null: false
    t.index ["item_id"], name: "index_podcasts_on_item_id"
    t.index ["user_id"], name: "index_podcasts_on_user_id"
  end

  create_table "user_book_favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_user_book_favorites_on_book_id"
    t.index ["user_id"], name: "index_user_book_favorites_on_user_id"
  end

  create_table "user_book_views", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_user_book_views_on_book_id"
    t.index ["user_id"], name: "index_user_book_views_on_user_id"
  end

  create_table "user_podcast_favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "podcast_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["podcast_id"], name: "index_user_podcast_favorites_on_podcast_id"
    t.index ["user_id"], name: "index_user_podcast_favorites_on_user_id"
  end

  create_table "user_podcast_views", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "podcast_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["podcast_id"], name: "index_user_podcast_views_on_podcast_id"
    t.index ["user_id"], name: "index_user_podcast_views_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "books", "items"
  add_foreign_key "books", "users"
  add_foreign_key "comments", "users"
  add_foreign_key "likes", "users"
  add_foreign_key "podcasts", "items"
  add_foreign_key "podcasts", "users"
  add_foreign_key "user_book_favorites", "books"
  add_foreign_key "user_book_favorites", "users"
  add_foreign_key "user_book_views", "books"
  add_foreign_key "user_book_views", "users"
  add_foreign_key "user_podcast_favorites", "podcasts"
  add_foreign_key "user_podcast_favorites", "users"
  add_foreign_key "user_podcast_views", "podcasts"
  add_foreign_key "user_podcast_views", "users"
end
