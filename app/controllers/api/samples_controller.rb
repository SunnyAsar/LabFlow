# frozen_string_literal: true

class Api::SamplesController < ApplicationController
  # before_action :set_sample, only: [:show]
  before_action :create_bill, only: [:create]

  def index
    @samples = find_sample.all
    render :index
  end

  def create
    sample_ids = []

    @samples.each do |sample|
      sample = current_user.samples.build(sample)
      @sample = sample.add_sample(@patient_id, @bill.id)
      sample_ids << @sample.id if @sample.save
    end

    @saved_samples = Sample.find(sample_ids)
    render json: @saved_samples, status: :ok
  end

  def show
    @sample = find_sample.find(params[:id])
    render :show
  end

  private

  def sample_params
    params.require(:sample).permit(:patient_id, samples: %i[name test_id])
  end

  def set_sample
    @sample = Sample.find(params[:id])
  end

  def find_sample
    Sample.includes(:test, :patient, :user)
  end

  def create_bill
    @patient_id = Patient.find_by(pid: sample_params[:patient_id]).id
    @samples = sample_params[:samples]
    @unique_patient_id = sample_params[:patient_id]
    @bill = Bill.create(current_user, @unique_patient_id, @patient_id)
    @bill.save
  end
end
