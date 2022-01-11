class Item < ApplicationRecord
  has_one :brand
  has_one :sub_category
  has_one_attached :image

  scope :filter_by_keyword, ->(keyword) { where("name ilike ?", "%#{keyword}%") }
  scope :filter_by_color, ->(colors) { where(color: colors) }
  scope :filter_by_size, ->(sizes) { where(size: sizes) }
  scope :filter_by_price, ->(priceLow, priceHigh) {where("price >= ? AND price <= ?", priceLow, priceHigh) }
  scope :filter_by_subcategory, ->(subCategoryId) { where(sub_category_id: subCategoryId)}
end
