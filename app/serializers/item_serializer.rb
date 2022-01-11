class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :description, :size, :color, :price, :stock,
             :gender, :image , :sub_category


  def image
    if object.image.attached?
      {
        url: rails_blob_path(object.image, only_path: true)
      }
    end
  end

  def sub_category
    SubCategory.find(object.sub_category_id).name
  end


end
