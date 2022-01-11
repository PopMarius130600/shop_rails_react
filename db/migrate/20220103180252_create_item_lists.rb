class CreateItemLists < ActiveRecord::Migration[6.1]
  def change
    create_table :item_lists do |t|
      t.integer :productCount
      t.integer :item_id
      t.integer :basket_id
      t.integer :order_id
      t.timestamps
    end
  end
end
