class Item < ApplicationRecord
  has_one :brand
  has_one :subCategory
end
