import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import style from "./WaterForm.module.css";
// import { useDispatch } from 'react-redux';
// import { editWaterEntry, addWaterEntry } from '../../redux/water/slice'; 
import { icons as sprite } from '../../shared/icons';
import toast from 'react-hot-toast';

const schemaWater = yup.object().shape({
    waterAmount: yup.number()
    .required('Please enter the amount of water.'),
    time: yup.string('Please select recording time.')
    .required(),
    keyboardAmount: yup.number('Please enter the value of water used.')
    .required()
});


const WaterForm = () => {
    // const dispatch = useDispatch();

    const defaultTime = () => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`
}

    const { handleSubmit, formState: { errors, isValid }, getValues, setValue, register } = useForm({
        defaultValues: {
            waterAmount: 50,
            time: defaultTime(),
            keyboardAmount: 50,
        }
    });

    const onSubmit = async (data) => {
        try {
            await schemaWater.validate(data, { abortEarly: false });
            console.log('Valid data:', data);
                toast.success('Data successfully added!')  
            // Reset form or perform other actions as needed
            // reset();
        } catch (error) {
            console.error('Validation errors:', error);
            toast.error('Invalid value of water! Min: 0, Max: 500')
           
        }
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
        if (newValue <= 500) { 
        handleWaterChange(newValue);
            setValue('waterAmount', newValue);
    }
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
     <form onSubmit={handleSubmit(onSubmit)}>
              
        <div className={style.addWaterForm}>
            <label className={style.itemWaterForm}>
            <span className={style.spanFormWater}>Amount of water:</span>
            <div className={style.waterAmountInputContainer}>
            <svg className={style.iconOperator} onClick={decrementWater}>
                <use className={style.icon} xlinkHref={`${sprite}#minus-modal`} />
           </svg>
                    <input
                    className={style.inputAddWater}
                    type="number"
                    {...register('waterAmount', { required: true })}
                    value={getValues('waterAmount')}
                    readOnly
                          />
            <svg className={style.iconOperator} onClick={incrementWater}>
                <use className={style.icon} xlinkHref={`${sprite}#plus-modal`} />
            </svg>
            </div>
        </label>
        <p>{errors.waterAmount?.message}</p>
      </div>
       
      <div className={style.timeWaterForm}>
         <label className={style.itemWaterForm}>
            <span className={style.spanFormWater}>Recording time:</span>
                    <input
                    className={style.inputWaterForm}
                    type="time"
                    {...register('time', {required: true})}
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
                    onChange={(e) => setValue('waterAmount', e.target.value)}
                    />
        </label>
        <p>{errors.keyboardAmount?.message}</p>
       </div>
            <button className={style.btnWaterForm} type="submit" disabled={!isValid}>Save</button>
        </form>
    </div>
  )
}

export default WaterForm;
