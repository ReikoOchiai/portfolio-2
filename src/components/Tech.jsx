import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import useMediaQuery from './customHooks/useMediaQuery';

function Tech() {
	const isMobile = useMediaQuery()
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{isMobile ? null : technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
}

export default SectionWrapper(Tech, '');
