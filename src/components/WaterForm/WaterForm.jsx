import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import style from "./WaterForm.module.css";
// import { useDispatch } from 'react-redux';
// import { editWaterEntry, addWaterEntry } from '../../redux/water/slice'; 
import { icons as sprite } from '../../shared/icons';

const schemaWater = yup.object().shape({
    waterAmount: yup.number()
    .required('Please enter the amount of water.'),
    // .min(5000, 'Minimum amount of water: 5000 ml.')
    // .max(15000, 'Maximum amount of water: 15000 ml.'),
    time: yup.string()
    .required(),
    keyboardAmount: yup.number()
    .required()
    // .min(5000, 'Minimum amount of water: 5000 ml.')
    // .max(15000, 'Maximum amount of water: 15000 ml.'),
});


const WaterForm = () => {
    // const dispatch = useDispatch();

    const defaultTime = () => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`
}

    const { handleSubmit, formState: { errors }, getValues, setValue, register } = useForm({
        defaultValues: {
            waterAmount: 50,
            time: defaultTime(),
            keyboardAmount: 50,
        }
    });

    const onSubmit = async (data) => {
      schemaWater.validate(data, { abortEarly: false });
    // try {
    //     schemaWater.validate(data, { abortEarly: false });

    //     if (operationType === "add") {
    //       dispatch(addWaterEntry(data));
    //     } else if (operationType === 'edit') {
    //       dispatch(editWaterEntry({ waterId, updatedEntry: data })); 
    //     }
    //     alert('Data successfully submitted!');
    // } catch (error) {
    //     console.error('Error sending data:', error);
    //     alert('Error submitting data. Please try again.')
    //     }
    console.log(data);
    };

            const fetchWaterEntries = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch water entries');
                }
                const data = await response.json();
                console.log('Water entries:', data);
                // Тут ви можете обробити отримані дані далі
            } catch (error) {
                console.error('Error fetching water entries:', error);
            }
        };

        fetchWaterEntries();


const handleWaterChange = (newValue) => {
        setValue('waterAmount', newValue); 
        setValue('keyboardAmount', newValue);
    };

const incrementWater = () => {
    const currentAmount = Number(getValues('waterAmount'));
    const newValue = currentAmount + 50;
       handleWaterChange(newValue);
       setValue('waterAmount', newValue);
};
    
const decrementWater = () => {
    const currentAmount = Number(getValues('waterAmount'));
        if (currentAmount >= 50) {
            const newValue = currentAmount - 50;
            handleWaterChange(newValue);
            setValue('waterAmount', newValue);
        }
};

  return (
   <div>
          <form className={style.listWaterForm} onSubmit={handleSubmit(onSubmit)}>
              
<div className={style.addWaterForm}>
  <label className={style.itemWaterForm}>
    <span className={style.spanFormWater}>Amount of water:</span>
    <svg className={style.iconOperator} onClick={decrementWater}>
      <use xlinkHref={`${sprite}#minus-modal`} />
    </svg>
    <input
      className={style.inputAddWater}
      type="number"
      {...register('waterAmount', { required: true })}
      value={getValues('waterAmount')}
      readOnly
    />
    <svg className={style.iconOperator} onClick={incrementWater}>
      <use xlinkHref={`${sprite}#plus-modal`} />
    </svg>
  </label>
  <p>{errors.waterAmount?.message}</p>
</div>
       
      <div className={style.timeWaterForm}>
         <label className={style.itemWaterForm}>
            <span className={style.spanFormWater}>Recording time:</span>
                    <input
                    className={style.inputWaterForm}
                    type="time"
                    {...register('time', { required: true })}
                    defaultValue={defaultTime()}
                    onChange={(e) => setValue('time', e.target.value)}
                />
            </label>
            <p>{errors.time?.message}</p>
      </div>

      <div className={style.enterWaterForm}>
        <label className={style.itemWaterForm}>
            <span className={style.spanFormWater}>Enter the value of the water used:</span>
                    <input
                    className={style.inputWaterForm}
                    type="number"
                    {...register('keyboardAmount', { required: true })}
                    readOnly
                    />
        </label>
        <p>{errors.keyboardAmount?.message}</p>
       </div>

              <button className={style.btnWaterForm} type="submit">Save</button>
        </form>
    </div>
  )
}

export default WaterForm;
