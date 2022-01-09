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

Item.create!(
  name: "Blugi",
  description: "Calitate superioare sefule",
  size: "M",
  color: "Blue",
  price: "126",
  stock: "1000",
  gender: "M"
)

Item.create!(
  name: "Geaca",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F"
  )

Item.create!(
  name: "Geaca Blana",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F"
  )

Item.create!(
  name: "Geaca Toamna",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F"
  )

Item.create!(
  name: "Geaca Vara",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F"
  )

Item.create!(
  name: "Geaca Iarna",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F"
  )