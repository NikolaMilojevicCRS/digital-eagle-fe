import styles from './HomeTeamSection.module.scss';

const getInitials = name => {
  if (!name?.trim()) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const TeamMember = ({ name, role, photo }) => {
  return (
    <div className={styles.TeamMember}>
      <div
        className={styles.TeamMemberImageWrapper}
        style={{
          backgroundImage: `url(${photo?.asset?.url})`
        }}
      >
        {!photo?.asset?.url && <p>{getInitials(name)}</p>}
      </div>
      <p className={styles.Name}>{name}</p>
      <p className={styles.Role}>{role}</p>
    </div>
  );
};

export default TeamMember;
