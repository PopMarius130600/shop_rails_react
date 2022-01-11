class ItemListSerializer < ActiveModel::Serializer
  attributes :id, :productCount, :item

  def item
    object.try(:item)
  end
end
