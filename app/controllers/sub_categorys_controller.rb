class SubCategorysController < ApplicationController
  def index
    render json: SubCategory.all.to_json
  end
end
