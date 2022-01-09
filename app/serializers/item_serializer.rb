class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :description, :size, :color, :price, :stock,
             :gender, :image


  def image
    if object.image.attached?
      {
        url: rails_blob_path(object.image, only_path: true)
      }
    end
  end
end
