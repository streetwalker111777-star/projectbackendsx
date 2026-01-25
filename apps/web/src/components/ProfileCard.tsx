import type { Profile } from '../lib/supabase'

interface ProfileCardProps {
  profile: Profile
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        {profile.avatar_url && (
          <img
            src={profile.avatar_url}
            alt={profile.full_name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold">{profile.full_name}</h3>
          <p className="text-gray-600">{profile.bio}</p>
          <span className={`inline-block px-2 py-1 text-xs rounded mt-2 ${
            profile.status === 'approved' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {profile.status}
          </span>
        </div>
      </div>
    </div>
  )
}
