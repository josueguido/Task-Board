import PropTypes from "prop-types"

function DetallesGuardados({ formData }) {
    return (
        <div>
            <h2>Información Guardada</h2>
            <p>Nombre de la tarea: {formData.taskName}</p>
            <p>Descripción: {formData.description}</p>
            <p>Icono seleccionado: {formData.icon}</p>
            <p>Estado: {formData.status}</p>
        </div>
    );
}

DetallesGuardados.propTypes = {
    formData: PropTypes.object.isRequired
};

export default DetallesGuardados;
