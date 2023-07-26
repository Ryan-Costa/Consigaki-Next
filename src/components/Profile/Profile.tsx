import React from 'react'
import Upload from '../UploadImage'

const Profile = () => {
  const handleImageUpload = (formData: any) => {
    fetch('sua-url-da-api', {
      method: 'PATCH',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // Lide com a resposta da API aqui, se necessário
      })
      .catch((error) => {
        console.log(error)
        // Lide com erros de requisição aqui, se necessário
      })
  }

  return (
    <div>
      <Upload onImageUpload={handleImageUpload} />
    </div>
  )
}

export default Profile
