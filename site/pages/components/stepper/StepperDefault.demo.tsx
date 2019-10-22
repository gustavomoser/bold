import { Step, Stepper } from '../../../../lib'

function StepperDefaultDemo() {
  return (
    <Stepper>
      <Step status='completed' hasConnector={false}>
        Completed step
      </Step>
      <Step status='active'>Second and active step</Step>
      <Step>Some incompleted step</Step>
      <Step>Last and incompleted step</Step>
    </Stepper>
  )
}

export default StepperDefaultDemo
