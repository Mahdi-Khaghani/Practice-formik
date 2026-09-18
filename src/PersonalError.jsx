const PersonalError = ({children}) => {
    return(
        <span className="text-red-600 font-medium text-center">
            {children}
        </span>
    )
}

export default PersonalError;