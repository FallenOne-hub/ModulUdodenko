import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import './ExploreContainer.css'
import { RenderComponent } from './RenderComponent'

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonItem>
        <IonLabel position="floating">Розмір війська:</IonLabel>
        <IonInput type='number' id='amount' value='1' />
      </IonItem>
      <IonButton expand="block" onClick={RenderComponent}>
        Вирахувати
      </IonButton>
    </div>
  )
}

export default ExploreContainer
