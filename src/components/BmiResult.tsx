import { IonRow, IonCardContent, IonCol, IonCard } from '@ionic/react';
import React from 'react'

const BmiResult: React.FC<{result: number}> = props => {
    return (
        <IonRow>
          <IonCol>
            <IonCard>
                <IonCardContent>
                    <h2>Your Body-Mass-Index</h2>
                    <h3>{props.result.toFixed(2)}</h3>
                 </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
    );
};

export default BmiResult;