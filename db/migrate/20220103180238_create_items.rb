class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :size
      t.string :color
      t.float :price
      t.integer :stock
      t.string :gender
      t.integer :brand_id
      t.integer :sub_category_id

      t.timestamps
    end
  end
end
