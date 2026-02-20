import styles from './HomeProposalSection.module.scss';
import { formatISODate } from '@/app/utils/methods';
import downloadIcon from '@/app/assets/images/download-icon.svg';

const Proposal = ({ proposal }) => {
  if (!proposal) return null;

  return (
    <div className={styles.Proposal}>
      <div className={styles.Category}>{proposal.category}</div>
      <h5 className={styles.Title}>{proposal.name}</h5>
      <p className={styles.Text}>{proposal.description}</p>
      <div className={styles.DocumentInfo}>
        <div className={styles.DocumentInfoItem}>
          <span className={styles.DocumentInfoTitle}>Format:</span>{' '}
          <span className={styles.DocumentInfoData}>
            {proposal?.document?.asset?.extension}
          </span>
        </div>
        <div className={styles.DocumentInfoItem}>
          <span className={styles.DocumentInfoTitle}>Date:</span>{' '}
          <span className={styles.DocumentInfoData}>
            {formatISODate(proposal?.document?.asset?._createdAt)}
          </span>
        </div>
        <div className={styles.DocumentInfoItem}>
          <span className={styles.DocumentInfoTitle}>Pages:</span>{' '}
          <span className={styles.DocumentInfoData}>
            {proposal?.document?.numberOfPages}
          </span>
        </div>
      </div>
      {proposal?.document?.asset?.url && (
        <a
          href={proposal.document.asset.url}
          download
          className={styles.DownloadLink}
        >
          <img
            src={downloadIcon}
            alt="download"
            className={styles.DownloadIcon}
          />
          Download proposal
        </a>
      )}
    </div>
  );
};

export default Proposal;
