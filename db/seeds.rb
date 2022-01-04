# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.create!(
  name: "Man"
)
Category.create!(
  name: "Woman"
)
Category.create!(
  name: "kids"
)



SubCategory.create!(
  name: "Puffer",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Jeans",
  category_id: Category.first.id
)