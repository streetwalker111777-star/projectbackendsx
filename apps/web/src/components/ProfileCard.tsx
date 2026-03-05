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
            alt={profile.full_name ?? ''}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold">{profile.full_name ?? profile.username}</h3>
          <p className="text-gray-600">{profile.username}</p>
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm hover:underline"
            >
              {profile.website}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
