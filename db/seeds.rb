# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.delete_all
SubCategory.delete_all
Item.delete_all
User.delete_all

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
  name: "Pants",
  category_id: Category.first.id
)
SubCategory.create!(
  name: "Coats",
  category_id: Category.second.id
)

SubCategory.create!(
  name: "T-Shirts",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Hats",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Shirts",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Coats",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Dresses",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Skirts",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Underwears",
  category_id: Category.first.id
)

SubCategory.create!(
  name: "Accessories",
  category_id: Category.first.id
)

#womans

SubCategory.create!(
  name: "Pants",
  category_id: Category.second.id
)

SubCategory.create!(
  name: "T-Shirts",
  category_id: Category.second.id
)

SubCategory.create!(
  name: "Hats",
  category_id: Category.second.id
)

SubCategory.create!(
  name: "Shirts",
  category_id: Category.second.id
)



SubCategory.create!(
  name: "Dresses",
  category_id: Category.second.id
)

SubCategory.create!(
  name: "Skirts",
  category_id: Category.second.id
)

SubCategory.create!(
  name: "Underwears",
  category_id: Category.second.id
)

SubCategory.create!(
  name: "Accessories",
  category_id: Category.second.id
)

Item.create!(
  name: "Jeans",
  description: "Calitate superioare sefule",
  size: "M",
  color: "Blue",
  price: "126",
  stock: "1000",
  gender: "M",
  sub_category_id: SubCategory.first.id
)

Item.create!(
  name: "Geaca",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F",
  sub_category_id: SubCategory.second.id

)

Item.create!(
  name: "Geaca Blana",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F",
  sub_category_id: SubCategory.second.id

)

Item.create!(
  name: "Geaca Toamna",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F",
  sub_category_id: SubCategory.second.id

)

Item.create!(
  name: "Geaca Vara",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F",
  sub_category_id: SubCategory.second.id

)

Item.create!(
  name: "Geaca Iarna",
  description: "Calitate superioare sefule",
  size: "S",
  color: "Black",
  price: "200",
  stock: "1000",
  gender: "F",
  sub_category_id: SubCategory.second.id

)

i = Item.first
i.image.attach(io: File.open("/Users/andreitibrea/environment/shop/shop_rails_react/app/assets/images/blugi.jpeg"), filename: "blugi.jpeg")
i = Item.second
i.image.attach(io: File.open("/Users/andreitibrea/environment/shop/shop_rails_react/app/assets/images/geaca-neagra.jpeg"), filename: "geaca-neagra.jpeg")
i = Item.third
i.image.attach(io: File.open("/Users/andreitibrea/environment/shop/shop_rails_react/app/assets/images/geaca-blana.jpeg"), filename: "geaca-blana.jpeg")
i = Item.fourth
i.image.attach(io: File.open("/Users/andreitibrea/environment/shop/shop_rails_react/app/assets/images/geaca-toamna.jpeg"), filename: "geaca-toamna.jpeg")

User.create!(
  email: "popmar13@gmail.com",
  password: "marius",
  role: "ADMIN"
)
