---
to: src/<%=year%>/<%=day%>/run.ts
---
import { getInput } from '../../utils/getInput';
import { log } from '../../utils/log';

const input = getInput(<%=year%>, <%=day%>).split('\n');

log.info('<%=day%>-1: %s', '<answer>');
log.info('<%=day%>-2: %s', '<answer>');
