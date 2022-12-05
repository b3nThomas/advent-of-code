---
to: src/<%=year%>/<%=day%>/run.ts
---
import { log } from '../../utils/log';
import { getInput } from '../../utils/getInput';

const input = getInput(<%=year%>, <%=day%>).split('\n');

const answer1 = 'TODO';
const answer2 = 'TODO';

log.info('<%=day%>-1: %s', answer1);
log.info('<%=day%>-2: %s', answer2);
