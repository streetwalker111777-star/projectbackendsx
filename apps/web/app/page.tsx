export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-6xl font-bold mb-8">
          Antigravity Platform
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Plataforma de perfiles con moderación de contenido
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">📝 Perfiles</h3>
            <p className="text-gray-600">Crea y gestiona perfiles aprobados</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">✅ Moderación</h3>
            <p className="text-gray-600">Sistema de moderación de contenido</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">🔒 Seguridad</h3>
            <p className="text-gray-600">Contenido verificado y seguro</p>
          </div>
        </div>
      </div>
    </main>
  )
}
