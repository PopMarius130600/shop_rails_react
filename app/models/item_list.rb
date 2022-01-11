class ItemList < ApplicationRecord
  belongs_to :basket
  belongs_to :item

  def total_price
    self.productCount * self.item.price
  end
end
