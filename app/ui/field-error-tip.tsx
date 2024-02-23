export default function FieldErrorTip({ id, state, fieldName }: 
  {
    id:string, 
    state: {errors?:any,message?: string | null},
    fieldName:string 
  }){
  return (
    <div id="${id}" aria-live="polite" aria-atomic="true">
      {state.errors && state.errors[fieldName] &&
        state.errors[fieldName].map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))
      }
    </div>
  );
}