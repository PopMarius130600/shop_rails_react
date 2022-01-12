class SimpleUserSerializer < ActiveModel::Serializer
  attributes :id, :email, :role, :orders, :created_at

end
