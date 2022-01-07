class Item < ApplicationRecord
  has_one :brand
  has_one :subCategory

  scope :filter_by_keyword, ->(keyword) { where("name ilike ?", "%#{keyword}%") }
end
