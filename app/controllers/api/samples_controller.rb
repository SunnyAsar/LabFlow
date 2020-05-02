# frozen_string_literal: true

class Api::SamplesController < ApplicationController
  before_action :set_sample, only: [:show]

  def index
    @samples = Sample.all
    render json: @samples
  end

  def create
    patient_unique_id = sample_params[:patient_id]
    patient_id = Patient.find_by(pid: patient_unique_id).id
    samples = sample_params[:samples]
    sample_ids = []

    samples.each do |sample|
      @current_sample = current_user.samples.build(sample)
      @current_sample.patient_id = patient_id
      @current_sample.amount = sample_amount(sample[:test_id])
      @current_sample.sample_id = SecureRandom.alphanumeric(8)
      @current_sample.status = 0
      sample_ids << @current_sample.id if @current_sample.save

      p 'sample.test_id'
      p sample_ids
      p sample[:test_id]
      p @current_sample
    end

    @saved_samples = Sample.find(sample_ids)
    render json: @saved_samples, status: :ok
  end

  def show; end

  private

  def sample_params
    params.require(:sample).permit(:patient_id, samples: %i[name test_id])
  end

  def sample_amount(data)
    Test.find(data).amount
  end

  def set_sample
    @sample = Sample.find(params[:id])
  end
end
