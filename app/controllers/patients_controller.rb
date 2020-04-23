class PatientsController < ApplicationController
  before_action :patient_params, only: [:create,:update]

  def index
    @patients = Patient.all
    render json: @patients
  end

  def create
    @patient = current_user.patients.build(patients_params)
    @patient.pid = SecureRandom.alphanumeric(8)
    if @patient.save
      render json: @patient, status: :ok
    else
      render json: { error: @patient.errors, message: 'something horrible happened'}, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  private

  def patients_params
    params.require(:patient).permit(:first_name,:last_name,:email,:phone, :contact_address)
  end

end