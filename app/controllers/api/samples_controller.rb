# frozen_string_literal: true

class Api::SamplesController < ApplicationController
  before_action :set_sample, only: [:show]

  def index
    @samples = Sample.all
    render json: @samples
  end

  def create; end

  def show; end

  private

  def sample_params
    params.require(:sample).permit(samples: [])
  end

  def set_sample
    @sample = Sample.find(params[:id])
  end
end
