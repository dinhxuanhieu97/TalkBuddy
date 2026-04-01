import { FamilyMember } from '../stores/userStore';

export const MOCK_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'John Doe',
    role: 'admin',
    creditsUsed: 450,
    joinedAt: '2026-01-15T10:00:00Z',
  },
  {
    id: '2',
    email: 'member1@example.com',
    name: 'Jane Smith',
    role: 'member',
    creditsUsed: 320,
    joinedAt: '2026-02-01T14:30:00Z',
  },
  {
    id: '3',
    email: 'member2@example.com',
    name: 'Bob Johnson',
    role: 'member',
    creditsUsed: 180,
    joinedAt: '2026-02-15T09:15:00Z',
  },
];

export const MOCK_FAMILY_ID = 'family-12345';

export const initializeMockFamily = (
  setFamily: (familyId: string, members: FamilyMember[], isAdmin: boolean) => void,
  isAdmin: boolean = true
) => {
  setFamily(MOCK_FAMILY_ID, MOCK_FAMILY_MEMBERS, isAdmin);
};
